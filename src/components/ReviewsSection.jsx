const ReviewsSection = ({ reviews }) => {
  return (
    <section className="flex flex-col md:flex-row gap-4 ">
      {reviews?.map((review) => (
        <div key={review.id} className="flex flex-col gap-2 w-full md:w-[40%]">
          <div className="flex gap-2 items-center">
            <div className="w-[30px] h-[30px] bg-[#db4444] rounded-full"></div>
            <p className="text-[#7D8184]">{review?.reviewerName}</p>
          </div>
          <p className="text-[#7D8184]">{review?.date}</p>
          <p className="text-[#7D8184]">{review?.comment}</p>
        </div>
      ))}
    </section>
  );
};

export default ReviewsSection;
