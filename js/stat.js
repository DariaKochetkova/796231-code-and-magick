'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_SPACE = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var GAP_LEFT = 40;
var TEXT_GAP_LEFT = 20;
var TEXT_GAP_TOP = 30;
var NAME_GAP_TOP = 270;
var SHADOW_GAP = 10;
var BAR_GAP_TOP = 100;
var RED_BAR = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  var textX = CLOUD_X + TEXT_GAP_LEFT;
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px, PT Mono';
  ctx.fillText('Ура вы победили!', textX, CLOUD_Y + TEXT_GAP_TOP);
  ctx.fillText('Список результатов:', textX, CLOUD_Y + TEXT_GAP_TOP * 1.7);

  var maxTime = getMaxElement(times);

  var getRandomBlue = function () {
    return 'rgba(0, 0, 102, ' + Math.random() + ')';
  };
  for (var i = 0; i < players.length; i++) {
    var barX = CLOUD_X + GAP_LEFT + (BAR_WIDTH + BAR_SPACE) * i;
    var barHeight = (BAR_HEIGHT * times[i]) / maxTime;
    var barY = BAR_GAP_TOP + BAR_HEIGHT - barHeight;
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), barX, BAR_GAP_TOP + BAR_HEIGHT - barHeight - 10);
    ctx.fillText(players[i], barX, NAME_GAP_TOP);
    ctx.fillStyle = players[i] === 'Вы' ? RED_BAR : getRandomBlue();
    ctx.fillRect(barX, barY, BAR_WIDTH, barHeight);
  }
};
