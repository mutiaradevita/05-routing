type Props = {
    params: {
          reviewId: string
    }
  }
  
  export default function Reviews ({ params }: Props) {
    return (
          <h1>This Review {params.reviewId}</h1>
    )
  }