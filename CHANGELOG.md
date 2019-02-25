# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.6.0"></a>
# [0.6.0](https://github.com/meumobi/ion-employee/compare/v0.5.0...v0.6.0) (2019-02-25)


### Bug Fixes

* **articles:** remove platform check ([c33a6be](https://github.com/meumobi/ion-employee/commit/c33a6be))
* **articles:** show toast after sharing items ([1960f38](https://github.com/meumobi/ion-employee/commit/1960f38))
* **auth:** duplicated AuthData update on listenAuthData ([5b2d7a1](https://github.com/meumobi/ion-employee/commit/5b2d7a1)), closes [#238](https://github.com/meumobi/ion-employee/issues/238)
* **comments:** only admin can promote comments ([fe0d886](https://github.com/meumobi/ion-employee/commit/fe0d886)), closes [#291](https://github.com/meumobi/ion-employee/issues/291)
* **comments:** prevent edit comment if user not admin or owner ([bf05b54](https://github.com/meumobi/ion-employee/commit/bf05b54)), closes [#286](https://github.com/meumobi/ion-employee/issues/286)
* **item:** img on item details could not be cropped ([f46d434](https://github.com/meumobi/ion-employee/commit/f46d434)), closes [#261](https://github.com/meumobi/ion-employee/issues/261)
* **items:** update img src path on details ([0a57e44](https://github.com/meumobi/ion-employee/commit/0a57e44))
* **login:** add subtitle on forgot password ([1bd90ef](https://github.com/meumobi/ion-employee/commit/1bd90ef)), closes [#264](https://github.com/meumobi/ion-employee/issues/264)
* **polls:** results out-of-date after user vote ([ec7827f](https://github.com/meumobi/ion-employee/commit/ec7827f)), closes [#281](https://github.com/meumobi/ion-employee/issues/281)
* **polls:** update dateformat ([9425e5c](https://github.com/meumobi/ion-employee/commit/9425e5c)), closes [#262](https://github.com/meumobi/ion-employee/issues/262)
* add socialSharingService on lazy loaded page article-details ([8827b95](https://github.com/meumobi/ion-employee/commit/8827b95))
* **push:** add android notification icons ([9cc2cfb](https://github.com/meumobi/ion-employee/commit/9cc2cfb)), closes [#266](https://github.com/meumobi/ion-employee/issues/266)
* any new user should have role set to 'user' ([47c18da](https://github.com/meumobi/ion-employee/commit/47c18da)), closes [#280](https://github.com/meumobi/ion-employee/issues/280)
* hide size if not empty ([51e4455](https://github.com/meumobi/ion-employee/commit/51e4455))
* wrong typing prevent code to compile ([65949d6](https://github.com/meumobi/ion-employee/commit/65949d6))
* **push:** OneSignal web SDK can only be initialized once ([ec34e48](https://github.com/meumobi/ion-employee/commit/ec34e48)), closes [#275](https://github.com/meumobi/ion-employee/issues/275)
* **settings:** avoid access if not admin ([36fd965](https://github.com/meumobi/ion-employee/commit/36fd965)), closes [#285](https://github.com/meumobi/ion-employee/issues/285)


### Features

* **articles:** allow share items ([0604565](https://github.com/meumobi/ion-employee/commit/0604565)), closes [#293](https://github.com/meumobi/ion-employee/issues/293)
* **articles:** allow web/native social share on same src code ([3762233](https://github.com/meumobi/ion-employee/commit/3762233)), closes [#299](https://github.com/meumobi/ion-employee/issues/299)
* **media:** allow to share media on native mode ([9b8ee75](https://github.com/meumobi/ion-employee/commit/9b8ee75)), closes [#298](https://github.com/meumobi/ion-employee/issues/298)
* **push:** add android notification icons ([978e706](https://github.com/meumobi/ion-employee/commit/978e706)), closes [#266](https://github.com/meumobi/ion-employee/issues/266)
* **push:** add web push ([00d1eb2](https://github.com/meumobi/ion-employee/commit/00d1eb2)), closes [#271](https://github.com/meumobi/ion-employee/issues/271)
* **utils:** add copy 2 clipboard function ([251b379](https://github.com/meumobi/ion-employee/commit/251b379))
* **videos:** migrate service to mmb-youtube-provider ([976554b](https://github.com/meumobi/ion-employee/commit/976554b)), closes [#258](https://github.com/meumobi/ion-employee/issues/258)



<a name="0.5.0"></a>
# [0.5.0](https://github.com/meumobi/ion-employee/compare/v0.4.0...v0.5.0) (2019-02-08)


### Features

* **push:** add native push ([9a62b3b](https://github.com/meumobi/ion-employee/commit/9a62b3b)), closes [#39](https://github.com/meumobi/ion-employee/issues/39)



<a name="0.4.0"></a>
# [0.4.0](https://github.com/meumobi/ion-employee/compare/v0.3.0...v0.4.0) (2019-02-05)


### Bug Fixes

* **config:** udpate widget id to com.meumobi.infomobi2 ([cb4c4b5](https://github.com/meumobi/ion-employee/commit/cb4c4b5))


### Features

* **auth:** migrate from v2 to v3 ([b424faa](https://github.com/meumobi/ion-employee/commit/b424faa)), closes [#257](https://github.com/meumobi/ion-employee/issues/257)



<a name="0.3.0"></a>
# [0.3.0](https://github.com/meumobi/ion-employee/compare/v0.2.0...v0.3.0) (2019-02-05)


### Bug Fixes

* **comments:** add domain on promoted comments ([1132a3d](https://github.com/meumobi/ion-employee/commit/1132a3d)), closes [#248](https://github.com/meumobi/ion-employee/issues/248)
* **comments:** comment.type misspelled ([8086ab3](https://github.com/meumobi/ion-employee/commit/8086ab3)), closes [#243](https://github.com/meumobi/ion-employee/issues/243)
* **push:** enable sw when user or browser denied permission ([5c171d4](https://github.com/meumobi/ion-employee/commit/5c171d4)), closes [#251](https://github.com/meumobi/ion-employee/issues/251) [#249](https://github.com/meumobi/ion-employee/issues/249)


### Features

* **auth:** add forgot password ([ad26e78](https://github.com/meumobi/ion-employee/commit/ad26e78)), closes [#222](https://github.com/meumobi/ion-employee/issues/222)
* **settings:** handle app settings on firestore ([3dfe97d](https://github.com/meumobi/ion-employee/commit/3dfe97d)), closes [#231](https://github.com/meumobi/ion-employee/issues/231)



<a name="0.2.0"></a>
# [0.2.0](https://github.com/meumobi/ion-employee/compare/v0.1.0...v0.2.0) (2019-01-30)


### Bug Fixes

* **auth:** can't login twice on same session ([5dae209](https://github.com/meumobi/ion-employee/commit/5dae209)), closes [#242](https://github.com/meumobi/ion-employee/issues/242)
* **media:** show missing attributes and add default behavior for unknown mime types ([d812ca7](https://github.com/meumobi/ion-employee/commit/d812ca7)), closes [#236](https://github.com/meumobi/ion-employee/issues/236) [#232](https://github.com/meumobi/ion-employee/issues/232) [#237](https://github.com/meumobi/ion-employee/issues/237)
* update version from v1.0.0 to v0.1.0 on package.json, package-lock and CHANGELOG ([0f71e49](https://github.com/meumobi/ion-employee/commit/0f71e49))


### Features

* **auth:** OTP - add modal window on login to update password if required ([16735e9](https://github.com/meumobi/ion-employee/commit/16735e9)), closes [#221](https://github.com/meumobi/ion-employee/issues/221)
* **images:** add lazy-load on avatar imgs ([19d8115](https://github.com/meumobi/ion-employee/commit/19d8115)), closes [#244](https://github.com/meumobi/ion-employee/issues/244)



<a name="0.1.0"></a>
# 0.1.0 (2019-01-22)


### Bug Fixes

* 2e2 test check if title is ([040a939](https://github.com/meumobi/ion-employee/commit/040a939))
* add translation on 'Email' word ([776c0e5](https://github.com/meumobi/ion-employee/commit/776c0e5))
* allow any author format on comment ([f453e79](https://github.com/meumobi/ion-employee/commit/f453e79))
* allow deep link to access pages on launch ([537c4c5](https://github.com/meumobi/ion-employee/commit/537c4c5))
* broken comment layout ([f7b76d2](https://github.com/meumobi/ion-employee/commit/f7b76d2))
* Closes [#101](https://github.com/meumobi/ion-employee/issues/101), Closes [#102](https://github.com/meumobi/ion-employee/issues/102), duplicate comments and wrong bad channel on mock ([1ab56ed](https://github.com/meumobi/ion-employee/commit/1ab56ed))
* Closes [#103](https://github.com/meumobi/ion-employee/issues/103), Closes [#100](https://github.com/meumobi/ion-employee/issues/100) Review anniversaries layout' ([bb673fb](https://github.com/meumobi/ion-employee/commit/bb673fb))
* Closes [#110](https://github.com/meumobi/ion-employee/issues/110), re-add annonymous ng-template on message view ([a42090b](https://github.com/meumobi/ion-employee/commit/a42090b))
* Closes [#116](https://github.com/meumobi/ion-employee/issues/116), randomly miss super-tabs on load ([f93fb56](https://github.com/meumobi/ion-employee/commit/f93fb56))
* Closes [#117](https://github.com/meumobi/ion-employee/issues/117), Closes [#124](https://github.com/meumobi/ion-employee/issues/124), add imgServer pipe into imgs uploaded ([5dfa8e4](https://github.com/meumobi/ion-employee/commit/5dfa8e4))
* Closes [#118](https://github.com/meumobi/ion-employee/issues/118), prevent duplicate promote ([df0a7e2](https://github.com/meumobi/ion-employee/commit/df0a7e2))
* Closes [#121](https://github.com/meumobi/ion-employee/issues/121), e2e error, No element found ([a8f8c90](https://github.com/meumobi/ion-employee/commit/a8f8c90))
* Closes [#124](https://github.com/meumobi/ion-employee/issues/124), add img pipe for img on project ([0810748](https://github.com/meumobi/ion-employee/commit/0810748))
* Closes [#134](https://github.com/meumobi/ion-employee/issues/134), add toast confirm actions: promote, delete ([a565b1a](https://github.com/meumobi/ion-employee/commit/a565b1a))
* Closes [#150](https://github.com/meumobi/ion-employee/issues/150), disable save button during upload.progress on desk/user form ([836f869](https://github.com/meumobi/ion-employee/commit/836f869))
* Closes [#154](https://github.com/meumobi/ion-employee/issues/154), click on author img -> open contact profile ([7c9a83f](https://github.com/meumobi/ion-employee/commit/7c9a83f))
* Closes [#159](https://github.com/meumobi/ion-employee/issues/159), duplicated comment on post-details ([3daa64e](https://github.com/meumobi/ion-employee/commit/3daa64e))
* Closes [#162](https://github.com/meumobi/ion-employee/issues/162), on forms readonly fields should use a different UI of editable fields ([cd648f1](https://github.com/meumobi/ion-employee/commit/cd648f1))
* Closes [#163](https://github.com/meumobi/ion-employee/issues/163), missing user.picture on new comment ([b498848](https://github.com/meumobi/ion-employee/commit/b498848))
* Closes [#170](https://github.com/meumobi/ion-employee/issues/170), Add icons on sidemenu link not categories ([530075a](https://github.com/meumobi/ion-employee/commit/530075a))
* Closes [#80](https://github.com/meumobi/ion-employee/issues/80), duplicating live comments ([75c7c27](https://github.com/meumobi/ion-employee/commit/75c7c27))
* Closes [#98](https://github.com/meumobi/ion-employee/issues/98), add service and mock imports on spec.ts to prevent error ([1969df7](https://github.com/meumobi/ion-employee/commit/1969df7))
* Closes [#99](https://github.com/meumobi/ion-employee/issues/99), only allow call load more after comments load ([52f6429](https://github.com/meumobi/ion-employee/commit/52f6429))
* disable new posts toast ([bb31efd](https://github.com/meumobi/ion-employee/commit/bb31efd))
* error on ci 'Unexpected token < in JSON' ([32640a3](https://github.com/meumobi/ion-employee/commit/32640a3))
* hide categories and tv if not katrium ([64e9abc](https://github.com/meumobi/ion-employee/commit/64e9abc)), closes [#227](https://github.com/meumobi/ion-employee/issues/227)
* open Home page on launch, fix e2e test checking title of Home ([866d460](https://github.com/meumobi/ion-employee/commit/866d460))
* path alias badly interpreted on vscode ([aff3404](https://github.com/meumobi/ion-employee/commit/aff3404))
* prevent e2e error, calling login page instead of waiting redirect ([ecf3306](https://github.com/meumobi/ion-employee/commit/ecf3306))
* prevent errors on tv view if posts load lazy ([c890a55](https://github.com/meumobi/ion-employee/commit/c890a55))
* prevent test failed because of translationService ([91923d1](https://github.com/meumobi/ion-employee/commit/91923d1))
* remove useless categories ([bd46d13](https://github.com/meumobi/ion-employee/commit/bd46d13))
* remove useless module raising error ([5c4b03a](https://github.com/meumobi/ion-employee/commit/5c4b03a))
* remove useless page raising AoT build failed ([babc8ec](https://github.com/meumobi/ion-employee/commit/babc8ec))
* revert mock ([330b37f](https://github.com/meumobi/ion-employee/commit/330b37f))
* review authentication flow and prevent access if not logged to restricted pages ([94f3d85](https://github.com/meumobi/ion-employee/commit/94f3d85)), closes [/github.com/ionic-team/ionic/issues/11459#issue-225436125](https://github.com//github.com/ionic-team/ionic/issues/11459/issues/issue-225436125) [#139](https://github.com/meumobi/ion-employee/issues/139) [#202](https://github.com/meumobi/ion-employee/issues/202)
* set static angular filter on search contacts ([a3bf9f6](https://github.com/meumobi/ion-employee/commit/a3bf9f6)), closes [#198](https://github.com/meumobi/ion-employee/issues/198)
* translate tokens from settings ([97b060f](https://github.com/meumobi/ion-employee/commit/97b060f))
* update birthdate to yyyy-mm-dd on mock-contacts ([5ce00cb](https://github.com/meumobi/ion-employee/commit/5ce00cb))
* **anniversaries:** update birthdate format and prevent duplicate todaysAnniversaires post ([12e89f3](https://github.com/meumobi/ion-employee/commit/12e89f3)), closes [#187](https://github.com/meumobi/ion-employee/issues/187) [#182](https://github.com/meumobi/ion-employee/issues/182)
* **api:** set User x-visitor-token and site.url on meumobi API requests ([7004d48](https://github.com/meumobi/ion-employee/commit/7004d48)), closes [#194](https://github.com/meumobi/ion-employee/issues/194)
* **articles:** raise error if no thumbnail available on article ([832237e](https://github.com/meumobi/ion-employee/commit/832237e))
* **articles:** remove ion-slides if item.images is empty ([f2995d2](https://github.com/meumobi/ion-employee/commit/f2995d2))
* **auth:** reset domain and token when logout on API Service ([812a4c2](https://github.com/meumobi/ion-employee/commit/812a4c2))
* **config:** setup INT environment, configure app to use it as default ([2bd49f3](https://github.com/meumobi/ion-employee/commit/2bd49f3)), closes [#190](https://github.com/meumobi/ion-employee/issues/190)
* **profiles:** move preferedLanguage on user profile ([2153dee](https://github.com/meumobi/ion-employee/commit/2153dee)), closes [#183](https://github.com/meumobi/ion-employee/issues/183)
* **profiles:** use user.displayName on contact-detail instead of firstName+lastName ([d0bc6d5](https://github.com/meumobi/ion-employee/commit/d0bc6d5))
* **videos:** ngx-embed-video Module build failed if AOT ([4653132](https://github.com/meumobi/ion-employee/commit/4653132)), closes [#225](https://github.com/meumobi/ion-employee/issues/225)
* update test e2e, using settings page instead of home ([c3b4b73](https://github.com/meumobi/ion-employee/commit/c3b4b73))


### Features

* add angular5 service worker ([566a3ca](https://github.com/meumobi/ion-employee/commit/566a3ca))
* add authentication data persistence ([7fdbf5a](https://github.com/meumobi/ion-employee/commit/7fdbf5a))
* add comments component on tv ([cb51df1](https://github.com/meumobi/ion-employee/commit/cb51df1))
* add contacts of 2 types: desk and user ([02f2370](https://github.com/meumobi/ion-employee/commit/02f2370))
* add google analytics ([c97b3ec](https://github.com/meumobi/ion-employee/commit/c97b3ec))
* add Image gallery (slides) and Image viewer to display in fullscreen with zooming options ([45d0d95](https://github.com/meumobi/ion-employee/commit/45d0d95))
* add infinite-scroll on comments ([6ffc900](https://github.com/meumobi/ion-employee/commit/6ffc900))
* add live page and post comments ([eb0e5e2](https://github.com/meumobi/ion-employee/commit/eb0e5e2))
* add master-detail pages and shared module ([6552c8e](https://github.com/meumobi/ion-employee/commit/6552c8e))
* **anniversaries:** add todayAnniversaries cloud function ([8d040cf](https://github.com/meumobi/ion-employee/commit/8d040cf)), closes [#90](https://github.com/meumobi/ion-employee/issues/90)
* **comments:** add domain on comments model ([126df6e](https://github.com/meumobi/ion-employee/commit/126df6e)), closes [#213](https://github.com/meumobi/ion-employee/issues/213)
* add media handling ([ad4ad38](https://github.com/meumobi/ion-employee/commit/ad4ad38))
* **contacts:** filter by domain ([13897cd](https://github.com/meumobi/ion-employee/commit/13897cd)), closes [#216](https://github.com/meumobi/ion-employee/issues/216)
* add multi-language, provided by ngx-translate ([a5949b4](https://github.com/meumobi/ion-employee/commit/a5949b4))
* add onesignal web push ([c5240a1](https://github.com/meumobi/ion-employee/commit/c5240a1))
* add pull to refresh on master page ([f9b7a5d](https://github.com/meumobi/ion-employee/commit/f9b7a5d))
* add settings page and lazy load home ([93136ff](https://github.com/meumobi/ion-employee/commit/93136ff))
* add shared module, include a toast Service ([3de6072](https://github.com/meumobi/ion-employee/commit/3de6072))
* add skeleton on master page ([cdbf9d3](https://github.com/meumobi/ion-employee/commit/cdbf9d3))
* add zoom on images on live and post-details pages ([22b8c6b](https://github.com/meumobi/ion-employee/commit/22b8c6b))
* Closes [#119](https://github.com/meumobi/ion-employee/issues/119), Add comment delete confirmation ([a837127](https://github.com/meumobi/ion-employee/commit/a837127))
* Closes [#128](https://github.com/meumobi/ion-employee/issues/128), fetch, and create if missing, user profile on bootsrap ([846ac2e](https://github.com/meumobi/ion-employee/commit/846ac2e))
* Closes [#132](https://github.com/meumobi/ion-employee/issues/132), Closes [#143](https://github.com/meumobi/ion-employee/issues/143), link contact-profile service to firestore ([0a157a4](https://github.com/meumobi/ion-employee/commit/0a157a4))
* Closes [#136](https://github.com/meumobi/ion-employee/issues/136), Closes [#137](https://github.com/meumobi/ion-employee/issues/137), Closes [#140](https://github.com/meumobi/ion-employee/issues/140), add my account page and allow admin to create/edit contacts (user/desk) ([3f20c68](https://github.com/meumobi/ion-employee/commit/3f20c68))
* Closes [#35](https://github.com/meumobi/ion-employee/issues/35), fetch posts from meumobi API ([8c4893d](https://github.com/meumobi/ion-employee/commit/8c4893d))
* Closes [#88](https://github.com/meumobi/ion-employee/issues/88), upgrade pipes imgServerSrcsettify and imgServerUrly to handle firestorage files ([29dfbcd](https://github.com/meumobi/ion-employee/commit/29dfbcd))
* Closes [#95](https://github.com/meumobi/ion-employee/issues/95), load more only if lastItem not reached ([735ee96](https://github.com/meumobi/ion-employee/commit/735ee96))
* handle dates and time with ngx-moment ([a7ee292](https://github.com/meumobi/ion-employee/commit/a7ee292))
* integrate login page with meumobi authentication ([4b3c93e](https://github.com/meumobi/ion-employee/commit/4b3c93e))
* mock categories - list and filter by ([604cfca](https://github.com/meumobi/ion-employee/commit/604cfca))
* mock edit user/desk profiles ([4a7ace1](https://github.com/meumobi/ion-employee/commit/4a7ace1))
* set dynamic links for images uploaded ([a4b120a](https://github.com/meumobi/ion-employee/commit/a4b120a))
* tv ([e8f8c70](https://github.com/meumobi/ion-employee/commit/e8f8c70))
* **polls:**  add polls on items feed ([817ac1c](https://github.com/meumobi/ion-employee/commit/817ac1c)), closes [#171](https://github.com/meumobi/ion-employee/issues/171)
* **videos:** add videos channel integrated with youtube API ([5bd3e52](https://github.com/meumobi/ion-employee/commit/5bd3e52)), closes [#57](https://github.com/meumobi/ion-employee/issues/57)


### BREAKING CHANGES

* **polls:** on messages already published field `postDetails` must be replaced by `itemDetails`
* add api url on environment config
* to provide the best User Experience we've introduced an auto responsive image sizing enabled by a custom instance of ImageFlow Server. This update requires items images of 2048px min width. The app wil select the src that best fit the current viewport.



<a name="0.0.1"></a>
## 0.0.1 (2018-05-21)
