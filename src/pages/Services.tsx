import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Wrench, Truck, PartyPopper } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Gift,
      title: "Envoltorio de Regalos",
      description: "Envolvemos tus juguetes con papel especial y decoraciones festivas."
    },
    {
      icon: Wrench,
      title: "Armado de Juguetes",
      description: "Servicio de armado profesional para juguetes que requieren ensamblaje."
    },
    {
      icon: Truck,
      title: "Entrega a Domicilio",
      description: "Llevamos tus juguetes directamente a tu puerta de manera segura."
    },
    {
      icon: PartyPopper,
      title: "Organización de Fiestas",
      description: "Ayudamos a organizar fiestas infantiles con nuestros juguetes y decoración."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Servicios Adicionales
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ofrecemos servicios especiales para hacer tu experiencia de compra aún mejor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services;
