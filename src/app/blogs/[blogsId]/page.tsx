type Props = {
    params: {
          blogsId: string
    }
  }
  
  export default function Blogs({ params }: Props) {
    return (
          <h1>Blogs {params.blogsId}</h1>
    )
  }