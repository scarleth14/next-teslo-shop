
export const revalidate = 60; //60 segundos

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { Gender } from "@prisma/client";
import { redirect } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
  params: {
    gender: string;
  },
    searchParams:{
      page?: string;
    }
}


export default async function ({params, searchParams}: Props) {
  
  const {gender} = params;

  const page = searchParams.page ? parseInt(searchParams.page): 1;

  const {products, currentPage, totalPages} = await getPaginatedProductsWithImages({
    page, 
    gender: gender as Gender,});

  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }


  const labels: Record<string, string> = {
    'men': 'Hombres',
    'women': 'Mujeres',
    'kid': 'Niños',
    'unisex': 'Todos',
  }

  // if (id === 'kids') {
  //   notFound();
  //   const a = 10;
  // }
  
  return (
    <>
    <Title title={`Artículos para ${labels[gender]} `} 
    subtitle="Todos los productos" 
    className="mb-2">
      
    </Title>

    <ProductGrid
     products={products}
    />

    <Pagination totalPages={totalPages}/>
    
  </>
  );
}