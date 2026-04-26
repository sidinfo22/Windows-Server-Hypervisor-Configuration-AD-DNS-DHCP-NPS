import { Navigate, Route, Routes } from 'react-router-dom';
import { pagePathByFile, pages } from './pages';
import { ReportPage } from './ReportPage';

function App() {
  return (
    <Routes>
      {pages.map((page) => (
        <Route
          key={page.slug}
          path={page.route}
          element={<ReportPage page={page} />}
        />
      ))}
      {Object.entries(pagePathByFile).map(([fileName, route]) => (
        <Route
          key={fileName}
          path={`/${fileName}`}
          element={<Navigate to={route} replace />}
        />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
