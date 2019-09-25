window.onload = function() {
  document.getElementById("btnStart").onclick = function() {
    const content = document.getElementById("txtContent").value;
    const isLoop = document.getElementById("chkLoop").checked;
    const per = document.getElementById("slctVoicePackage").value;
    if (content.length > 0) {
      const playerContainer = document.getElementById("playerContainer");

      btts(
        {
          tex: content,
          tok: "24.ee4f5102a596afdf604556139428a35b.2592000.1571992511.282335-17341910",
          spd: 5, // 语速
          pit: 5,
          vol: 15,
          per: +per,
        },
        {
          volume: 0.3,
          autoDestory: false, //播放完后是否移除对象
          timeout: 10000,
          hidden: false,
          onInit: function(htmlAudioElement) {},
          onSuccess: function(htmlAudioElement) {
            $("#playerContainer").empty();
            playerContainer.appendChild(htmlAudioElement);
            htmlAudioElement.loop = isLoop ? "loop" : "";
            htmlAudioElement.play();
          },
          onError: function(text) {
            alert(text);
          },
          onTimeout: function() {
            alert("timeout");
          },
        }
      );
    }
  };
};
