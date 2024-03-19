import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  }
}


export default function ({params}: Props) {
  
  const {id} = params;

  if (id === 'kids') {
    notFound();
    const a = 10;
  }
  
  return (
    <div>
      <h1>Category Page {id}</h1>
    </div>
  );
}