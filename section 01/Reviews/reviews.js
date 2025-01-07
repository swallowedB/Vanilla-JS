const reviews = [
  {
    name: "Jane Smith",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quibusdam molestiae nostrum explicabo accusamus commodi doloribus! Velit aperiam dolores, tempore autem reprehenderit dolorum repudiandae laudantium accusamus illo nulla quod nihil?"
  },
  {
    name: "John Doe",
    review: "This is an amazing product! Highly recommend it. Great value for money and excellent customer service."
  },
  {
    name: "Sam Wilson",
    review: "A bit pricey, but the quality is top-notch. Worth the investment, hands down!"
  }
];

let currentReviewIndex= 0;

const preBtn = document.querySelector(".prev-button")
const nextBtn = document.querySelector(".next-button")
const carousel = document.querySelector(".carousel-item");

const updateReview = () => {
  const review = reviews[currentReviewIndex];
  carousel.innerHTML = `
    <div class="carousel-item">
      <img
        src="/section 01/Reviews/personImg/verson${currentReviewIndex + 1}.png"
        alt="Review ${currentReviewIndex + 1}"
        class="carousel-image"
      />
      <h3 class="carousel-name">${review.name}</h3>
      <p class="carousel-review">
        ${review.review}
      </p>
    </div>
`
}

preBtn.addEventListener("click", () => {
  currentReviewIndex = (currentReviewIndex > 0) ? currentReviewIndex -1 : reviews.length -1;
  updateReview();
});

nextBtn.addEventListener("click", () => {
  currentReviewIndex = (currentReviewIndex < reviews.length -1) ? currentReviewIndex +1 : 0;
  updateReview();
});

updateReview();