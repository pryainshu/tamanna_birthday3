import { Routes, Route, Navigate } from "react-router-dom";

import BirthdayPage from "./pages/BirthdayPage";

function App() {
  return (
    <Routes>

      {/* Birthday Website */}
      <Route
        path="/"
        element={<Navigate to="/birthday" replace />}
      />

      <Route
        path="/birthday"
        element={<BirthdayPage />}
      />

      {/* Any wrong URL */}
      <Route
        path="*"
        element={<Navigate to="/birthday" replace />}
      />

    </Routes>
  );
}

export default App;