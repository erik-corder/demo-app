import { FC, useEffect } from "react";
import { useParams } from "react-router";
import { setLoading, setProduct } from "../../../store/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Rating, SvgIcon, SvgIconProps, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import Loading from "../../common/Loading";

interface SingleProductProps {}

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const SingleProduct: FC<SingleProductProps> = ({}) => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const { product, loading } = useSelector((state: any) => state.product);

  const fetchProduct = async () => {
    dispatch(setLoading(true));
    await fetch(`https://dummyjson.com/products/${productId}`)
      .then((response) => response.json())
      .then((actualData) => {
        dispatch(setProduct(actualData));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        alert(err.message);
        dispatch(setLoading(false));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const {
    images,
    title,
    description,
    category,
    brand,
    rating,
    discountPercentage,
    stock,
    price,
  } = product;

  console.log(product, loading);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="product-page">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images?.map((image: any) => {
          return (
            <SwiperSlide>
              <img src={image} alt="1" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="product-page__info">
        <div className="product-page__info__title">
          <Typography variant="h3" fontWeight={600} color={grey[900]}>
            {title}
          </Typography>
          <div className="price-section">
            <div className="price-section-top">
              <Typography variant="h4" fontWeight={600} color={blue[900]}>
                <span className="dollar-sign">$</span>
                {price}
              </Typography>
              <Typography variant="caption" fontWeight={600} color={grey[700]}>
                Discount {discountPercentage}%
              </Typography>
            </div>
            <div className="price-section-bottom">
              <Typography variant="caption" fontWeight={600} color={grey[700]}>
                Stock :{stock}
              </Typography>
              <Typography variant="caption" fontWeight={600} color={grey[700]}>
                Brand :{brand}
              </Typography>
              <Typography variant="caption" fontWeight={600} color={grey[700]}>
                Category :{category}
              </Typography>
            </div>
          </div>

          <div className="store-card">
            <HomeIcon className="store-card-icon" color="action" />
            <div className="store-card-description">
              <Typography variant="caption" fontWeight={600} color={grey[600]}>
                In Store
              </Typography>
              <Typography variant="caption" fontWeight={400} color={grey[600]}>
                Pick Up from {stock} Stokes
              </Typography>
            </div>
          </div>

          <div className="rating">
            <Typography variant="caption" fontWeight={600} color={grey[600]}>
              Rating
            </Typography>
            <Rating name="simple-controlled" value={rating} />
          </div>

          <div className="product-page__info__title__buttons">
            <Typography
              variant="h6"
              marginTop={4}
              fontWeight={600}
              color={blue[900]}
            >
              Product Description
            </Typography>
            <Typography variant="body1" fontWeight={600} color={blue[800]}>
              {description}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
