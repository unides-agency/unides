# How to Run the Migration Script

## Step 1: Get Firebase Service Account Key

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click the ⚙️ gear icon → **Project Settings**
4. Go to **Service Accounts** tab
5. Click **Generate New Private Key**
6. Save the JSON file (e.g., `serviceAccountKey.json`) to this project directory
7. **IMPORTANT:** Add it to `.gitignore` (already done if using default .gitignore)

## Step 2: Install Dependencies

```bash
npm install firebase-admin
```

## Step 3: Run the Migration Script

```bash
node migrate-creatives.js
```

The script will:
1. Ask for the path to your service account key
2. Show you all creatives that will be migrated
3. Ask for confirmation
4. Migrate each creative to the talents collection with `type: 'creative'`
5. Optionally delete the old creatives collection

## Example Run

```
$ node migrate-creatives.js

=== Firebase Migration Script ===

Enter path to your Firebase service account key JSON file: ./serviceAccountKey.json
✅ Connected to Firebase

Found 5 creative(s) to migrate

Documents to migrate:
  - abc123: John Doe
  - def456: Jane Smith
  - ghi789: Alex Johnson
  - jkl012: Sam Lee
  - mno345: Taylor Brown

Proceed with migration? (yes/no): yes

Migrating...

✅ Migrated: abc123 (John Doe)
✅ Migrated: def456 (Jane Smith)
✅ Migrated: ghi789 (Alex Johnson)
✅ Migrated: jkl012 (Sam Lee)
✅ Migrated: mno345 (Taylor Brown)

=== Migration Complete ===
Success: 5
Errors: 0

⚠️  IMPORTANT: Review the migrated data in Firebase Console
Then manually delete the "creatives" collection if everything looks good.

Delete old creatives collection now? (yes/no): yes

Deleting old creatives collection...
✅ Old creatives collection deleted
```

## Step 4: Verify in Firebase Console

1. Go to Firestore Database
2. Check the `talents` collection
3. Verify that creatives have `type: 'creative'`
4. Make sure all fields were copied correctly

## Troubleshooting

### Error: "Cannot find module './serviceAccountKey.json'"
- Make sure you downloaded the service account key
- Check the file path you entered
- Use relative path like `./serviceAccountKey.json` or absolute path

### Error: "Permission denied"
- Make sure your service account has Firestore read/write permissions
- Check Firebase project permissions

### Script hangs or doesn't respond
- Press Ctrl+C to cancel
- Check your internet connection
- Verify Firebase credentials

## Rollback

If something goes wrong and you need to rollback:

1. The script doesn't delete the original `creatives` collection until you confirm
2. If you need to restore, simply copy documents back from `talents` where `type === 'creative'` to `creatives` collection
3. Remove the `type` field from those documents

## Security Note

🔒 **Never commit your service account key to git!**

The key has full access to your Firebase project. Keep it secure and add it to `.gitignore`.
