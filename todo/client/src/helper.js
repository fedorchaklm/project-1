function getPrevStatus(status) {
  switch (status) {
    case statuses.DONE:
      return statuses.IN_PROGRESS;
    case statuses.IN_PROGRESS:
      return statuses.TODO;
    default:
      return null;
  }
}
