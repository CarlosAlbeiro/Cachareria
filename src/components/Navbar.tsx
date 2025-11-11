import { Link } from "react-router-dom";
import { Home, Wrench } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="bg-primary/10 border-b border-primary/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 m-4">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            
            <img
              src={logo}
              alt="Logo Portafolio"
              className="h-[80px] w-auto" 
            />
            <span className="font-semibold"> bubble toys Quindio</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/servicios" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              <Wrench className="h-4 w-4" />
              <span>Servicios Adicionales</span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
