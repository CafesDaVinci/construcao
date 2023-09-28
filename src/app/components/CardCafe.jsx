import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function calculateAverageRating(ratings) {
  if (!ratings || ratings.length === 0) {
    return 0; // Se não houver avaliações ou se ratings for undefined, a média é 0.
  }

  // const totalRating = ratings.reduce((acc, rating) => acc + rating, 0);
  const averageRating = ratings.length;
  return averageRating;
}

function StarRating({ rating }) {
  const numStars = 5;
  const filledStars = Math.floor(rating);

  const starIcons = [];
  for (let i = 0; i < numStars; i++) {
    if (i < filledStars) {
      starIcons.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
      );
    } else {
      starIcons.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-zinc-300" />
      );
    }
  }

  return <div className="flex">{starIcons}</div>;
}


export default function CardCafe({ foto, titulo, preco,ratings }) {

  const averageRating = calculateAverageRating(ratings);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-72 h-[454px] md:mr-8 mb-8 group flex flex-col justify-center items-center "
      >
        <Image src={foto} alt={titulo} width={300} height={300} className="w-72" />
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold font-bebas mt-10">{titulo}</h2>
          <StarRating rating={averageRating} />
          <p className="text-lg">R${preco}</p>
          <button className="bg-text text-primary py-4 px-8 font-bebas mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
            Adicioar ao Carrinho
          </button>
        </div>
      </motion.div>
    </div>
  );
}
