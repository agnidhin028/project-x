import { Injectable } from '@angular/core';
import { Database, ref, push, set } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private db: Database) {}

  // Save user data without authentication
  async saveUserData(username: string, password: string) {
    try {
        const newUserRef = push(ref(this.db, 'users')); // Generate new entry
        await set(newUserRef, { username, password });

      return 'User data saved successfully!';
    } catch (error:any) {
      console.error('Error:', error.message);
      return error.message;
    }
  }
}
