# 🍕 Pizza App (Legacy / Archived)

> **⚠️ ATTENTION: THIS REPOSITORY IS ARCHIVED** > This version of the project is no longer maintained due to critical dependency conflicts between **React Native 0.84 (React 19)** and native modules (Reanimated, Gesture Handler, Worklets).

---

### 🚀 Development has moved!
The project has been rebuilt from scratch on a stable stack to ensure build reliability and better performance. All new features and bug fixes are happening in the new repository.

👉 **New Repository:** [https://github.com/IhorFlowZenith/PizzaV2ReactNative]

---

### 🛠 Why is this project archived?
The decision to archive this repository was made following several architectural blockers:

1. **Version Mismatch:** Using experimental/bleeding-edge versions (React Native 0.84) caused "breaking changes" in the native Android/Java layer that were incompatible with current stable versions of third-party libraries.
2. **Native Build Failures:** Significant conflicts occurred during the C++/CMake compilation process, specifically with `react-native-reanimated` and its interaction with the new `UIManager` structure.
3. **Stability Choice:** To provide a production-ready experience, the project was migrated to **React Native 0.76.x**, which offers a stable bridge between the New Architecture and the existing library ecosystem.

### 🍕 Legacy Features (implemented here):
* Basic Navigation structure.
* Cart logic using Context API.
* UI components for pizza cards and menu lists.

---
*Thank you for following the journey! See you in the new repo!* 👨‍💻
