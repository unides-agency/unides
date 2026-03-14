#!/usr/bin/env node

/**
 * Migration Script: Move Creatives to Talents Collection
 * 
 * This script moves all documents from the 'creatives' collection
 * to the 'talents' collection and adds a type='creative' field.
 * 
 * Prerequisites:
 * 1. Install firebase-admin: npm install firebase-admin
 * 2. Download your service account key from Firebase Console
 * 3. Update the path to your service account key below
 */

const admin = require('firebase-admin');
const readline = require('readline');

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  console.log('=== Firebase Migration Script ===\n');
  
  // Ask for service account key path
  const keyPath = await askQuestion('Enter path to your Firebase service account key JSON file: ');
  
  try {
    // Initialize Firebase Admin
    const serviceAccount = require(keyPath);
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    
    console.log('✅ Connected to Firebase\n');
    
    const db = admin.firestore();
    const creativesRef = db.collection('creatives');
    const talentsRef = db.collection('talents');
    
    // Get all creatives
    const snapshot = await creativesRef.get();
    
    if (snapshot.empty) {
      console.log('⚠️  No creatives found in the creatives collection');
      rl.close();
      process.exit(0);
    }
    
    console.log(`Found ${snapshot.size} creative(s) to migrate\n`);
    
    // Show what will be migrated
    console.log('Documents to migrate:');
    snapshot.forEach(doc => {
      console.log(`  - ${doc.id}: ${doc.data().name || 'Unnamed'}`);
    });
    
    // Confirm migration
    const confirm = await askQuestion('\nProceed with migration? (yes/no): ');
    
    if (confirm.toLowerCase() !== 'yes' && confirm.toLowerCase() !== 'y') {
      console.log('Migration cancelled');
      rl.close();
      process.exit(0);
    }
    
    console.log('\nMigrating...\n');
    
    let successCount = 0;
    let errorCount = 0;
    
    // Migrate each document
    for (const doc of snapshot.docs) {
      try {
        const data = doc.data();
        
        // Copy to talents collection with type field
        await talentsRef.doc(doc.id).set({
          ...data,
          type: 'creative'
        });
        
        console.log(`✅ Migrated: ${doc.id} (${data.name || 'Unnamed'})`);
        successCount++;
      } catch (error) {
        console.error(`❌ Error migrating ${doc.id}:`, error.message);
        errorCount++;
      }
    }
    
    console.log('\n=== Migration Complete ===');
    console.log(`Success: ${successCount}`);
    console.log(`Errors: ${errorCount}`);
    
    if (errorCount === 0) {
      console.log('\n⚠️  IMPORTANT: Review the migrated data in Firebase Console');
      console.log('Then manually delete the "creatives" collection if everything looks good.');
      
      const deleteOld = await askQuestion('\nDelete old creatives collection now? (yes/no): ');
      
      if (deleteOld.toLowerCase() === 'yes' || deleteOld.toLowerCase() === 'y') {
        console.log('\nDeleting old creatives collection...');
        const batch = db.batch();
        snapshot.docs.forEach(doc => {
          batch.delete(doc.ref);
        });
        await batch.commit();
        console.log('✅ Old creatives collection deleted');
      } else {
        console.log('⚠️  Please delete the creatives collection manually after verification');
      }
    }
    
    rl.close();
    process.exit(0);
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    rl.close();
    process.exit(1);
  }
}

main();
