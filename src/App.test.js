import React from "react";
import { createRoot } from 'react-dom/client';
import MainApp from "./App";
it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<MainApp />);
    root.unmount();
});