import { useParams, Link } from "react-router-dom";
import { toys } from "@/data/toys";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, MessageCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

const ToyDetail = () => {
  const { id } = useParams();
  const toy = toys.find((t) => t.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!toy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Juguete no encontrado</h1>
          <Link to="/">
            <Button>Volver al inicio</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Hola! Me interesa el ${toy.name}. ¿Podrían darme más información?`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver a la tienda
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted shadow-[var(--shadow-card)]">
              <img
                src={toy.gallery[selectedImage]}
                alt={`${toy.name} - Vista ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {toy.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-primary shadow-[var(--shadow-playful)]"
                      : "border-border hover:border-secondary"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3 bg-secondary text-lg px-4 py-1">
                {toy.category}
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {toy.name}
              </h1>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-primary">
                  ${toy.price}
                </span>
                <Badge variant="outline" className="text-base">
                  {toy.ageRange}
                </Badge>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-semibold mb-3">Descripción</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {toy.description}
              </p>
            </div>

            <Card className="bg-accent/10 border-accent">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Características Destacadas
                </h3>
                <ul className="space-y-3">
                  {toy.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Button
              onClick={handleWhatsAppContact}
              size="lg"
              className="w-full text-lg h-14 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-[var(--shadow-playful)]"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contactar por WhatsApp
            </Button>

            {toy.videoUrl && (
              <div className="rounded-xl overflow-hidden shadow-[var(--shadow-card)]">
                <video
                  controls
                  className="w-full"
                  poster={toy.image}
                >
                  <source src={toy.videoUrl} type="video/mp4" />
                  Tu navegador no soporta videos.
                </video>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ToyDetail;
