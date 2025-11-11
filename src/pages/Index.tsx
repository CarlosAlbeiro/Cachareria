import { toys } from "@/data/toys";
import { ToyCard } from "@/components/ToyCard";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Sparkles } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    toy.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      <Navbar />
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-12 shadow-[var(--shadow-playful)]">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-2">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-semibold">La mejor juguetería online</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              🎮 JugueteLandia 🎨
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
              Diversión sin límites para todas las edades
            </p>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="container mx-auto px-4 -mt-6">
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-card rounded-2xl shadow-[var(--shadow-card)] p-2 border-2 border-border">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar juguetes por nombre o categoría..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-14 h-12 text-lg border-0 bg-transparent focus-visible:ring-0"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Nuestros Juguetes
          </h2>
          <p className="text-muted-foreground text-lg">
            {filteredToys.length} juguetes disponibles
          </p>
        </div>

        {filteredToys.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-2xl text-muted-foreground">
              No se encontraron juguetes 😢
            </p>
            <Button
              onClick={() => setSearchQuery("")}
              className="mt-4"
              variant="outline"
            >
              Ver todos los juguetes
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredToys.map((toy) => (
              <ToyCard key={toy.id} toy={toy} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 JugueteLandia - Donde la diversión nunca termina 🎉
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
