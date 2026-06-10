export const WHATSAPP_NUMBER = "5219983016872";

export const brand = {
  name: "Rincón del Hombre",
  tagline: "Estilo masculino, limpio y seguro.",
  description:
    "Moda masculina seleccionada para hombres que buscan vestir bien, sentirse cómodos y proyectar seguridad todos los días.",
  location: "Cancún, Quintana Roo",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
};

export const categories = [
  { id: "todos", name: "Todos" },
  { id: "polos", name: "Polos" },
  { id: "sudaderas", name: "Sudaderas" },
  { id: "playeras", name: "Playeras" },
  { id: "accesorios", name: "Accesorios" },
];

export const products = [
  {
    id: "1",
    name: "Polo Dry Fit Azul Marino",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=900&h=1100&fit=crop",
    slug: "polo-dry-fit-azul-marino",
    category: "polos",
    featured: true,
    badge: "Más vendido",
    description: "Polo ligero de corte moderno, ideal para clima cálido y uso diario.",
  },
  {
    id: "2",
    name: "Polo Dry Fit Gris Oxford",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=900&h=1100&fit=crop",
    slug: "polo-dry-fit-gris",
    category: "polos",
    featured: true,
    description: "Textura fresca, fácil de combinar y con una presencia sobria.",
  },
  {
    id: "3",
    name: "Sudadera Premium Negra",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1556821552-5f6f32c432c9?w=900&h=1100&fit=crop",
    slug: "sudadera-premium-negro",
    category: "sudaderas",
    featured: true,
    badge: "Premium",
    description: "Sudadera cómoda con acabado elegante para outfits casuales.",
  },
  {
    id: "4",
    name: "Sudadera Beige Camel",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=900&h=1100&fit=crop",
    slug: "sudadera-beige",
    category: "sudaderas",
    featured: true,
    description: "Tono neutro y versátil para un estilo urbano más limpio.",
  },
  {
    id: "5",
    name: "Playera Slim Fit Azul Turquesa",
    price: 199.99,
    salePrice: 99.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&h=1100&fit=crop",
    slug: "playera-slim-fit-azul-turquesa",
    category: "playeras",
    badge: "Oferta",
    description: "Playera fresca con fit definido para looks relajados.",
  },
  {
    id: "6",
    name: "Playera Slim Fit Azul Cielo",
    price: 199.99,
    salePrice: 99.99,
    image: "https://images.unsplash.com/photo-1618354691551-44de113f0164?w=900&h=1100&fit=crop",
    slug: "playera-slim-fit-azul-cielo",
    category: "playeras",
    description: "Color claro, ideal para combinar con mezclilla o tonos neutros.",
  },
  {
    id: "7",
    name: "Playera Slim Rosa Pastel",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=900&h=1100&fit=crop",
    slug: "playera-slim-rosa-pastel",
    category: "playeras",
    description: "Una opción suave y moderna para salir de lo básico.",
  },
  {
    id: "8",
    name: "Gorra Essential Negra",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=900&h=1100&fit=crop",
    slug: "gorra-essential-negra",
    category: "accesorios",
    description: "Accesorio básico para cerrar cualquier outfit casual.",
  },
];

export function formatPrice(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(value);
}

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
