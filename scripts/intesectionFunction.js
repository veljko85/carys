function intersectionFunction(
  fakeFronts,
  fakeFences,
  sturmankersVorderseite,
  sturVorderseiteSrafs,
  fakeBacks,
  sturmankersRuckseite,
  sturRuckseiteSrafs,
  foundationStarts,
  foundations,
  foundationStartsVord,
  foundationsVord,
  foundationStartsRuck,
  foundationsRuck
) {
  setTimeout(() => {
    for (let i = 0; i < fakeFronts.length; i++) {
      fakeFences.forEach((elm) => {
        if (elm.name == "fakeFence") {
          if (elm.intersectsMesh(fakeFronts[i], true)) {
            sturmankersVorderseite[i].isVisible = false;
            sturVorderseiteSrafs[i].isVisible = false;
            sturmankersRuckseite[i].isVisible = false;
            sturRuckseiteSrafs[i].isVisible = false;
            foundationVisibilty(
              foundationStarts,
              foundations,
              true,
              foundationStartsVord,
              foundationsVord,
              false,
              foundationStartsRuck,
              foundationsRuck,
              false,
              i
            );
          }
          if (elm.intersectsMesh(fakeBacks[i], true)) {
            sturmankersVorderseite[i].isVisible = false;
            sturVorderseiteSrafs[i].isVisible = false;
            sturmankersRuckseite[i].isVisible = false;
            sturRuckseiteSrafs[i].isVisible = false;
            foundationVisibilty(
              foundationStarts,
              foundations,
              true,
              foundationStartsVord,
              foundationsVord,
              false,
              foundationStartsRuck,
              foundationsRuck,
              false,
              i
            );
          }
        }
      });
    }
  }, 0);
}
