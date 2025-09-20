## Capacitor Integration Steps (for reference)

1. Install Capacitor core and CLI:
   ```bash
   npm install @capacitor/core @capacitor/cli
   ```

2. Initialize Capacitor (replace [name] and [id] as needed):
   ```bash
   npx cap init vue-base-enterprise com.example.vuebase --web-dir=dist
   ```

3. Build the Vue app:
   ```bash
   npm run build
   ```

4. Install native platforms:
   ```bash
   npm install @capacitor/ios @capacitor/android
   npx cap add android
   npx cap add ios
   ```

5. Sync web assets:
   ```bash
   npx cap sync
   ```

6. Test on device/emulator:
   ```bash
   npx cap open android
   npx cap open ios
   ```

7. Add and test a native API (e.g., Geolocation) in a Vue component.

---
Follow these steps in your terminal. The next code change will demonstrate a sample Geolocation API usage in a Vue component.