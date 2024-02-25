const BASE_URL = process.env.REACT_APP_BASE_URL;

function mapToFormData(payload) {
  const formData = new FormData();

  Object.entries(payload).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
}

export function getAllReviews() {
  const request = fetch(`${BASE_URL}/`)
    .then((response) => response.json())
    .then((Allreviews) => Allreviews);
  return request;
}

export function getOneReview(id) {
  const request = fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((oneReview) => oneReview)
    .catch((err) => console.log("Error getting one review"));
  return request;
}

export function createNewReview(review) {
  const formData = mapToFormData(review);

  const request = fetch(`${BASE_URL}/`, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((newReviewEnd) => newReviewEnd)
    .catch((err) => console.log("Error getting New review"));
  return request;
}

export function updateReview(id, review) {
  const formData = mapToFormData(review);

  const request = fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    body: formData,
  })
    .then((response) => response.json())
    .then((reviewUpdated) => reviewUpdated)
    .catch((err) => console.log("Error updating"));

  return request;
}

export function deleteReview(id) {
  const request = fetch(`${BASE_URL}/${id}`, { method: "DELETE" })
    .then((response) => response.json())
    .then((reviewDeleted) => reviewDeleted)
    .catch((error) => console.log("Error deleting"));
  return request;
}
