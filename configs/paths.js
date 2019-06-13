'use strict';

const path = require('path');
const fs = require('fs');
const url = require('url');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  app: resolveApp('app'),
  appCommon: resolveApp('app/common'),
  appCommonComp: resolveApp('app/common/components'),
  appCommonScss: resolveApp('app/common/scss'),
  appCommonStore: resolveApp('app/common/store'),
  appCommonStyled: resolveApp('app/common/styled'),
  appComp: resolveApp('app/components'),
  appCon: resolveApp('app/container'),
  appScss: resolveApp('app/scss'),
  appStore: resolveApp('app/store'),
  appStyled: resolveApp('app/container/styled'),
  appUtil: resolveApp('app/util'),
  appExtend: resolveApp('app/util/extend'),
  appLib: resolveApp('app/util/lib'),
  appTool: resolveApp('app/util/tool'),
  appStatic: resolveApp('app/static'),
  appIcon: resolveApp('app/static/icon'),
  appImage: resolveApp('app/static/image'),
  appPhoto: resolveApp('app/static/photo'),
  appMusic: resolveApp('app/static/music'),
  appVedio: resolveApp('app/static/vedio'),
};