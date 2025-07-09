 function updateReviewList(reviews) {
            let reviewsList = document.querySelector('.reviewsList');
            reviewsList.innerHtml="";
            reviews.forEach((review) => {
                let li = document.createElement('li');
                li.innerHtml = ` <li class="reviewListItem">
                            <div class="reviewtitle">Title:${review.title}</div>
                            <div class="reviewDescription">Description:${review.description}</div>
                            <button class="deleteReviewBtn"><a href="/deletereview/id=${review._id}">Delete</a></button>
                        </li>`;
                reviewsList.appendChild(li);
            });
        }
        let writeReview = document.querySelector('.writeReview');
        let inputReview = document.querySelector('.inputReview');
        writeReview.addEventListener('click', (event) => {
            inputReview.classList.toggle('hide');
        })
        let title = document.querySelector('.title');
        let description = document.querySelector('.description');
        let submitReviewBtn = document.querySelector('.submitReviewBtn');
        let productId = document.querySelector('.productId');
        submitReviewBtn.addEventListener('click', (event) => {
            let titleText = title.value;
            let descriptionText = description.value;
            let id = productId.value;

            inputReview.classList.toggle('hide');
            title.value = description.value = '';
            axios.post('/shop/submitreview', {
                title: titleText,
                description: descriptionText,
                productId: id
            })
                .then(function (response) {
                    updateReviewList(response.data.reviews);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
