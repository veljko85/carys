var createCyrisKapija = (
  posX,
  posZ,
  rotY,
  activeFence,
  fencesArr,
  preckeMat,
  fenceBoardMat,
  rootMat,
  removeSideAccesories,
  addDefaultMaterial,
  rightPosts,
  newFenceForwardSigns,
  newFenceRightSigns,
  newFenceLeftSigns,
  newFenceBackSigns,
  selectedMat,
  cameraTargetMesh,
  cameraTarget,
  ground,
  fenceBoards,
  sturmankersVorderseite,
  leftPosts,
  preckes,
  fencePostMat,
  addFenceSings,
  setActiveFenceOnCombineFences,
  deleteFenceOn,
  fakeFences,
  addNewFenceMeshMat,
  wholeFences,
  fenceId,
  setActivnesStyle,
  changeFence
) =>
  BABYLON.SceneLoader.ImportMeshAsync("", "mesh/", "kapijaCarys4.glb").then(
    (result) => {
      var kapija = result.meshes[0];
      kapija.rotationQuaternion = null;
      kapija.position.x = posX;
      kapija.position.z = posZ;
      kapija.rotation.y = rotY;
      // wholeFences.push(fence);
      let kapijaParts = [];
      for (let i = 0; i < result.meshes.length; i++) {
        console.log(i, result.meshes[i].name);
        kapijaParts.push(result.meshes[i]);
      }
      for (let i = 7; i < result.meshes.length; i++) {
        result.meshes[i].material = rootMat;
        result.meshes[i].isVisible = false;
      }

      result.meshes[1].material =
        result.meshes[2].material =
        result.meshes[3].material =
        result.meshes[4].material =
          preckeMat;
      if (fenceBoards[activeFence][0].material.id != "selectedMat") {
        preckes[fenceId].push(
          result.meshes[1],
          result.meshes[2],
          result.meshes[3],
          result.meshes[4]
        );
      } else {
        preckes[activeFence].push(
          result.meshes[1],
          result.meshes[2],
          result.meshes[3],
          result.meshes[4]
        );
      }

      if (fenceBoards[activeFence][0].material.id != "selectedMat") {
        fenceBoards[fenceId].push(result.meshes[5], result.meshes[6]);
      } else {
        fenceBoards[activeFence].push(result.meshes[5], result.meshes[6]);
      }
      result.meshes[5].material = result.meshes[6].material = fenceBoardMat;

      let vrataPrednjaLeva = new Array(result.meshes[10], result.meshes[9]);

      let vrataPrednjaDesna = new Array(result.meshes[12], result.meshes[7]);

      let vrataZadnjaLeva = new Array(result.meshes[10], result.meshes[14]);

      let vrataZadnjaDesna = new Array(result.meshes[12], result.meshes[8]);

      vrataPrednjaLeva.forEach((elm) => {
        elm.isVisible = true;
      });

      function toActiveFence() {
        for (let i = 0; i < fencesArr.length; i++) {
          if (fencesArr[i].kapijaParts != undefined) {
            if (fencesArr[i].kapijaParts[1].material.id == "selectedMat") {
              activeFence = i;
            }
          }
        }
        sideAccesories.style.display = "block";
        addFenceAcc.style.display = "block";
        addCarysFenceAcc.style.display = "block";

        //set delete fence image and text
        deleteFenceOn(activeFence);
        //delete fence
        // deleteFencePart.onclick = () => {
        //   if (activeFence > 0) {
        //     delFenFun(activeFence);
        //     deleteFence(activeFence);
        //     checkPostIntersecting(
        //       fakePosts,
        //       allPosts,
        //       rightRoots,
        //       intersectedPosts,
        //       intersectedPostsMain,
        //       fencesArr
        //     );
        //     //set activnes of led when deleted led
        //     ledsOn = 0;
        //     leds.forEach((elm) => {
        //       if (elm.isVisible) {
        //         ledsOn += 1;
        //       }
        //     });
        //     if (ledsOn == 0) {
        //       //set to ohne on led lights
        //       //set html
        //       lightSettings.style.display = "none";
        //       lightColorSet.style.display = "none";
        //       //set babylon
        //       leds.forEach((elm) => {
        //         elm.isVisible = false;
        //       });
        //       setDayNight(0.6, 0.8, 0.7);
        //       ledColNum = 4;
        //       setLightColor(ledColNum);
        //       setLedColor(ledColNum);
        //       setActivnesStyle(ledParts, 6, 0, "active-text-color");
        //     }

        //     //set activnes of sturmanker parts
        //     sturNum = 0;
        //     for (let i = 0; i < sturmankersVorderseite.length; i++) {
        //       if (sturmankersVorderseite[i].isVisible) {
        //         sturNum += 1;
        //       } else if (sturmankersRuckseite[i].isVisible) {
        //         sturNum += 1;
        //       }
        //     }
        //     if (sturNum < 1) {
        //       setActivnesStyle(sturmankerCon, 10, 1, "active-text-color");
        //       strurmOn = false;
        //     } else {
        //       strurmOn = true;
        //     }
        //   }
        // };

        newFenceForwardSigns[activeFence].isVisible = true;
        newFenceRightSigns[activeFence].isVisible = true;
        newFenceLeftSigns[activeFence].isVisible = true;
        newFenceBackSigns[activeFence].isVisible = true;
        // }
        intersectArrowSignsFence(
          fakeFences,
          newFenceForwardSigns,
          newFenceRightSigns,
          newFenceLeftSigns,
          newFenceBackSigns,
          activeFence,
          addFenceSings
        );

        //set activnes of active fence settings
        if (fencesArr[activeFence].type == "carys100/180kapija") {
          setActivnesStyle(changeFence, 0, 5, "active-text-color");
        }
        //deactivate arrows
        activeArrow = false;
        activeArrowSide = false;
        addFenceSings.forEach((elm) => {
          elm.material = addNewFenceMeshMat;
        });
        addNewFenceToSide.style.display = "none";
        cameraTargetMesh(cameraTarget, wholeFences[activeFence]);
        console.log(fencesArr[activeFence]);
      }

      //add selected to mesh
      for (let i = 0; i < result.meshes.length; i++) {
        result.meshes[i].actionManager = new BABYLON.ActionManager(scene);
        result.meshes[i].actionManager.registerAction(
          new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
              if (result.meshes[i].material.id != "selectedMat") {
                removeSideAccesories(
                  sideAccesories,
                  deleteAccesorie,
                  addFenceAcc,
                  editPost,
                  addNewFenceToSide
                );
                addDefaultMaterial(
                  fenceBoards,
                  fenceBoardMat,
                  sturmankersVorderseite,
                  rightPosts,
                  leftPosts,
                  fenceBoardMat,
                  fencePostMat,
                  addFenceSings,
                  preckes,
                  preckeMat
                );
                result.meshes[1].material =
                  result.meshes[2].material =
                  result.meshes[3].material =
                  result.meshes[4].material =
                  result.meshes[5].material =
                  result.meshes[6].material =
                    //   rightPosts[activeFence].material =
                    selectedMat;
                //function for fence activnes
                toActiveFence();
                setActiveFenceOnCombineFences();
                rightPosts[activeFence].material = selectedMat;
              } else {
                // closeSliderContainer();
                sideAccesories.style.display = "none";
                addFenceAcc.style.display = "none";
                addDefaultMaterial(
                  fenceBoards,
                  fenceBoardMat,
                  sturmankersVorderseite,
                  rightPosts,
                  leftPosts,
                  fenceBoardMat,
                  fencePostMat,
                  addFenceSings,
                  preckes,
                  preckeMat
                );

                // singsDel.forEach((elm) => {
                //   elm.isVisible = false;
                // });
                //turn off add new sings
                newFenceForwardSigns[activeFence].isVisible = false;
                newFenceRightSigns[activeFence].isVisible = false;
                newFenceLeftSigns[activeFence].isVisible = false;
                newFenceBackSigns[activeFence].isVisible = false;
                cameraTargetMesh(cameraTarget, ground);
                //turn of active fence
                setTimeout(() => {
                  activeFence = false;
                }, 100);
              }
            }
          )
        );
      }
      if (fenceBoards[activeFence][0].material.id != "selectedMat") {
        fencesArr[fenceId].kapijaParts = kapijaParts;
      } else {
        fencesArr[activeFence].kapijaParts = kapijaParts;
      }
    }
  );
