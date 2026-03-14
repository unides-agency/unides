# Migration Guide: Consolidate Creatives into Talents Collection

## What Changed

- Talents and Creatives are now stored in the same Firestore collection: `talents`
- A new `type` field distinguishes them: `'talent'` or `'creative'`
- This simplifies the admin panel and database management

## Migration Steps

### Option 1: Manual Migration (Firebase Console)

1. Go to Firebase Console → Firestore Database
2. Open the `creatives` collection
3. For each creative document:
   - Copy the document ID and all fields
   - Go to the `talents` collection
   - Create a new document with the same ID
   - Paste all fields
   - Add a new field: `type` = `creative`
4. After migrating all creatives, delete the `creatives` collection

### Option 2: Programmatic Migration (Node.js Script)

```javascript
// Run this in Node.js with Firebase Admin SDK
const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert('./serviceAccountKey.json')
});

const db = admin.firestore();

async function migrateCreatives() {
  const creativesRef = db.collection('creatives');
  const talentsRef = db.collection('talents');
  
  const snapshot = await creativesRef.get();
  
  console.log(`Found ${snapshot.size} creatives to migrate`);
  
  for (const doc of snapshot.docs) {
    const data = doc.data();
    
    // Copy to talents collection with type field
    await talentsRef.doc(doc.id).set({
      ...data,
      type: 'creative'
    });
    
    console.log(`Migrated creative: ${doc.id}`);
  }
  
  console.log('Migration complete!');
  console.log('Review the data, then manually delete the creatives collection');
}

migrateCreatives().catch(console.error);
```

### Option 3: Add Type to Existing Data

If you want to keep existing data structure and just add type fields:

**For existing talents** (optional - they work without type field):
```javascript
const talentsRef = db.collection('talents');
const snapshot = await talentsRef.get();

for (const doc of snapshot.docs) {
  const data = doc.data();
  if (!data.type) {
    await doc.ref.update({ type: 'talent' });
    console.log(`Updated talent: ${doc.id}`);
  }
}
```

**For existing creatives** (move to talents collection):
```javascript
const creativesRef = db.collection('creatives');
const talentsRef = db.collection('talents');
const snapshot = await creativesRef.get();

for (const doc of snapshot.docs) {
  const data = doc.data();
  await talentsRef.doc(doc.id).set({
    ...data,
    type: 'creative'
  });
  console.log(`Migrated creative: ${doc.id}`);
}
```

## Verification

After migration, verify in Firebase Console:
- All documents should be in the `talents` collection
- Creatives should have `type: 'creative'`
- Talents should have `type: 'talent'` (or no type field)

## Rollback

If needed, you can rollback by:
1. Filtering documents where `type === 'creative'`
2. Moving them back to `creatives` collection
3. Removing the `type` field
