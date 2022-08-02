function createNewFence(
  createRightFence,
  activeArrowSide,
  rightPosts,
  leftPosts,
  activeArrow,
  fencePostMat,
  addFenceSings,
  addNewFenceMeshMat,
  sideAccesories,
  addNewFenceToSide,
  unselect,
  fenceType,
  getAbsPosX,
  getAbsPosZ
) {
  if (activeArrowSide == 1) {
    createRightFence(
      getAbsPosX(rightPosts[activeArrow]) + 0.99,
      getAbsPosZ(rightPosts[activeArrow]),
      0,
      fenceType,
      "forward"
    );
  }
  if (activeArrowSide == 2) {
    createRightFence(
      getAbsPosX(rightPosts[activeArrow]),
      getAbsPosZ(rightPosts[activeArrow]) - 0.99,
      Math.PI / 2,
      fenceType,
      "right"
    );
  }
  if (activeArrowSide == 3) {
    createRightFence(
      getAbsPosX(rightPosts[activeArrow]),
      getAbsPosZ(rightPosts[activeArrow]) + 0.99,
      -Math.PI / 2,
      fenceType,
      "left"
    );
  }
  if (activeArrowSide == 4) {
    createRightFence(
      getAbsPosX(rightPosts[activeArrow]) - 0.99,
      getAbsPosZ(rightPosts[activeArrow]),
      Math.PI,
      fenceType,
      "back"
    );
  }
  if (activeArrowSide == 5) {
    createRightFence(
      getAbsPosX(leftPosts[0]),
      getAbsPosZ(leftPosts[0]) - 0.99,
      Math.PI / 2,
      fenceType,
      "right"
    );
  }
  if (activeArrowSide == 6) {
    createRightFence(
      getAbsPosX(leftPosts[0]),
      getAbsPosZ(leftPosts[0]) + 0.99,
      -Math.PI / 2,
      fenceType,
      "left"
    );
  }

  if (activeArrow != false) rightPosts[activeArrow].material = fencePostMat;

  activeArrow = false;
  activeArrowSide = false;
  addFenceSings.forEach((elm) => {
    elm.material = addNewFenceMeshMat;
  });
  sideAccesories.style.display = "none";
  addNewFenceToSide.style.display = "none";

  unselect(false);

  // singsDel.forEach((elm) => {
  //   elm.isVisible = false;
  // });
}
