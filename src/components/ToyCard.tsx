import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Toy } from "@/data/toys";

interface ToyCardProps {
  toy: Toy;
}

export const ToyCard = ({ toy }: ToyCardProps) => {
  return (
    <Link to={`/toy/${toy.id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-playful)] hover:-translate-y-1 border-2 hover:border-primary">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={toy.image}
            alt={toy.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <CardContent className="p-4">
          <Badge className="mb-2 bg-secondary">{toy.category}</Badge>
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {toy.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {toy.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">${toy.price}</span>
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
            Ver Detalles
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
