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
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px, PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_GAP_LEFT, CLOUD_Y + TEXT_GAP_TOP);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_GAP_LEFT, CLOUD_Y + TEXT_GAP_TOP * 1.7);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_LEFT + (BAR_WIDTH + BAR_SPACE) * i, BAR_GAP_TOP + BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime - 10);
    ctx.fillText(players[i], CLOUD_X + GAP_LEFT + (BAR_WIDTH + BAR_SPACE) * i, NAME_GAP_TOP);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 102, ' + Math.random() + ')';
    }
    ctx.fillRect(CLOUD_X + GAP_LEFT + (BAR_WIDTH + BAR_SPACE) * i, BAR_GAP_TOP + BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};
