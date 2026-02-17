type BlogPostProps = {
  params: {
    slug: string;
  };
};

export default function BlogPost({ params }: BlogPostProps) {
  return <h1>Blog slug: {params.slug}</h1>;
}
