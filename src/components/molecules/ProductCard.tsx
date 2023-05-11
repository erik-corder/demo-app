import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { FC } from "react";
import { useNavigate } from "react-router";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    thumbnail: string;
  };
}

export const ProductCard: FC<ProductCardProps> = ({
  product: { id, description, price, discountPercentage, thumbnail },
}: ProductCardProps) => {
  const navigate = useNavigate();
  const handleAction = () => {
    navigate(`/product/${id}`);
  };
  return (
    <Card sx={{ maxWidth: 345 }} className="product-card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={thumbnail}
          alt="green iguana"
        />
        <CardContent>
          <div className="product-card-price">
            <Typography variant="h6" fontWeight={600} color={grey[800]}>
              {price}$
            </Typography>

            <Typography variant="caption" fontWeight={500} color={red[500]}>
              save up to {discountPercentage}%
            </Typography>
          </div>

          <Typography
            variant="body2"
            color="text.palette"
            className="line-clamp"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-actions-button">
        <Button size="small" color="primary" onClick={handleAction}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
