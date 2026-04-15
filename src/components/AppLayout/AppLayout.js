import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const AppLayout = () => {
    return (
        <div className="flex h-screen flex-col overflow-hidden">
            <Header/>
            <main className="flex-1 overflow-y-auto bg-slate-100">
                <Outlet/>
            </main>
        </div>
    );
}

export default AppLayout;