import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { formatPrice, whatsappLink } from "@/app/lib/store-data";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  slug: string;
  badge?: string;
  description?: string;
}

export default function ProductCard({ name, price, salePrice, image, slug, badge, description }: ProductCardProps) {
  const currentPrice = salePrice ?? price;
  const wa = whatsappLink(`Hola, me interesa el producto ${name}. ¿Me puedes dar más información?`);

  return (
    <article className="card-product card-hover group">
      <Link href={`/productos/${slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-light">
          <Image src={image} alt={name} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 25vw" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent opacity-0 transition group-hover:opacity-100" />
          {badge && <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">{badge}</span>}
        </div>
      </Link>
      <div className="p-5">
        <Link href={`/productos/${slug}`}>
          <h3 className="mb-2 line-clamp-2 min-h-[3.3rem] text-xl font-bold leading-tight transition group-hover:text-accent">{name}</h3>
        </Link>
        {description && <p className="mb-4 line-clamp-2 text-sm text-primary/55">{description}</p>}
        <div className="mb-5 flex items-end gap-2">
          <span className="text-2xl font-black text-primary">{formatPrice(currentPrice)}</span>
          {salePrice && <span className="pb-1 text-sm text-primary/40 line-through">{formatPrice(price)}</span>}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Link href={`/productos/${slug}`} className="btn-outline px-3 py-2.5 text-sm">Ver</Link>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary px-3 py-2.5 text-sm">
            <MessageCircle className="h-4 w-4" /> Pedir
          </a>
        </div>
      </div>
    </article>
  );
}
