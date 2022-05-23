// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')
const VERSION_STRING = '3.2.2'
const path = require('path')
function resolve(dir) {
	return path.join(__dirname, dir)
}
const trunk = {
	aioSsoServer: 'http://172.20.21.215:3000',
	whalePc: 'http://172.20.21.215:8787',
	whaleMergePc: 'http://172.20.21.215:9797',
	omsConsignorPc: 'http://172.20.21.228:8989',
	ams: 'http://172.20.20.221:8787'
}
const test = {
	aioSsoServer: 'http://172.20.21.135:3000',
	whalePc: 'http://172.20.21.135:8787',
	whaleMergePc: 'http://172.20.21.135:9797',
	whaleGroupPc: 'http://172.20.21.183:8989',
	omsConsignorPc: 'http://172.20.21.70:8989',
	ams: 'http://172.20.21.181:8787',
	quota: 'http://172.20.21.181:8787',
	ppsfront: 'http://172.20.21.140:8085/',
	sap: 'http://172.20.21.181:8787'
}
const newTest = {
	aioSsoServer: 'http://172.20.21.122:3000',
	whalePc: 'http://172.20.21.122:8787',
	whaleMergePc: 'http://172.20.21.122:9797',
	whaleGroupPc: 'http://172.20.21.122:8989',
	omsConsignorPc: 'http://172.20.21.198:8989',
	ams: 'http://172.20.21.137:8787',
	quota: 'http://172.20.21.137:8787',
	ppsfront: 'http://172.20.21.137:8085',
	sap: 'http://172.20.21.137:8787'
}
const pre = {
	aioSsoServer: 'http://172.16.16.161:3000',
	whalePc: 'http://172.16.16.161:8787',
	whaleMergePc: 'http://172.16.16.161:9797',
	whaleGroupPc: 'http://172.16.16.161:8989',
	omsConsignorPc: 'http://172.16.16.159:8989',
	ams: 'http://172.16.16.220:8787',
	ppsfront: 'http://172.16.16.220:8085',
}
const pre2 = {
	aioSsoServer: 'http://pre3.apigateway-core.zczy.com',
	whalePc: 'http://pre3.apigateway-core.zczy.com',
	whaleMergePc: 'http://pre3.apigateway-core.zczy.com',
	whaleGroupPc: 'http://pre3.apigateway-core.zczy.com',
	omsConsignorPc: 'http://172.20.20.139:8989',
	ams: 'http://pre3.apigateway-core.zczy.com/ams-shark-pc/',
	ppsfront: 'http://pre3.apigateway-core.zczy.com/pps-front/',
}
const online = {
	aioSsoServer: 'http://172.30.30.118:8080',
	whalePc: 'http://172.30.30.118:8080',
	whaleMergePc: 'http://172.30.30.118:8080',
	whaleGroupPc: 'http://172.30.30.118:8080',
	omsConsignorPc: 'http://172.30.30.118:8080',
	ams: 'http://prod.apigateway-core.zczy100.com/ams-shark-pc',
	ppsfront: 'http://172.30.30.239:8085',
	ppsfront: 'http://172.30.30.93:8085',
}

module.exports = {
	transpileDependencies: [
		/[/\\]node_modules[/\\](.+?)?asn1(.*)/
	],
	lintOnSave: true,
	publicPath: './',
	assetsDir: 'assets',
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		proxy: {
			// 登录
			'/whale-aio-sso-server/': {
				target: newTest.aioSsoServer,
				changeOrigin: true,
				ws: true
			},
			// 会员
			'/whale-pc/': {
				target: newTest.whalePc,
				changeOrigin: true,
				ws: true
			},
			// 会员
			'/whale-merge-pc/': {
				// target: 'http://192.168.87.97:9797', // 陈永春本机
				target: newTest.whaleMergePc,
				changeOrigin: true,
				ws: true
			},
			// 订单
			'/oms-consignor-pc/': {
				// target: 'http://192.168.88.58:8989',
				target: newTest.omsConsignorPc,
				changeOrigin: true,
				ws: true
			},
			// 发票
			'/ams': {
				target: newTest.ams, // newTest
				// target: 'http://192.168.88.57:8787', // 王子豪
				changeOrigin: true,
				ws: true
			},
			// 额度
			'/quota': {
				target: newTest.ams, // trunk
				// target: 'http://192.168.88.57:8787', // 王子豪
				changeOrigin: true,
				ws: true
			},
			// '/bigdata': {
			// 	target: 'http://172.20.21.185:7879', // trunk
			// 	// target: 'http://192.168.88.57:8787', // 王子豪
			// 	changeOrigin: true,
			// 	ws: true
			// }
		},
		sockHost: 'http://0.0.0.0:8080'
	},
	pages: {
		// 首页index
		index: {
			entry: 'src/mains/index.js',
			template: 'public/index.ejs',
			filename: 'index.html',
			pagename: 'home',
			version: VERSION_STRING,
			// seo-配合搜索引擎优化 vue-不考虑seo
			pagetype: 'seo',
			title: '首页-中储智运-物流运力交易共享平台',
			keywords:
				'中储南京智慧物流科技有限公司,智慧物流,中储智运,中储,物流,物流规划,生产物流,物流咨询',
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		},
		// 货主
		consignor: {
			entry: 'src/consignorMain.js',
			template: 'public/index.ejs',
			filename: 'consignor.html',
			pagetype: 'vue',
			title: '中储智运-货主',
			keywords:
				'中储南京智慧物流科技有限公司,智慧物流,中储智运,中储,物流,物流规划,生产物流,物流咨询',
			chunks: ['chunk-vendors', 'chunk-common', 'consignor']
		},
		// 集团
		group: {
			entry: 'src/groupMain.js',
			template: 'public/index.ejs',
			filename: 'group.html',
			pagetype: 'vue',
			title: '中储智运-集团',
			keywords: '集团',
			chunks: ['chunk-vendors', 'chunk-common', 'group']
		},
		// 货源信息
		sourceOfGoods: {
			entry: 'src/mains/sourceOfGoods.js',
			template: 'public/index.ejs',
			filename: 'sourceOfGoods.html',
			pagename: 'sourceOfGoods',
			version: VERSION_STRING,
			// seo-配合搜索引擎优化 vue-不考虑seo
			pagetype: 'seo',
			title: '货源信息',
			keywords: '',
			chunks: ['chunk-vendors', 'chunk-common', 'sourceOfGoods']
		},
		// 车源信息
		sourceOfVehicleSource: {
			entry: 'src/mains/sourceOfVehicleSource.js',
			template: 'public/index.ejs',
			filename: 'sourceOfVehicleSource.html',
			pagename: 'sourceOfVehicleSource',
			version: VERSION_STRING,
			// seo-配合搜索引擎优化 vue-不考虑seo
			pagetype: 'seo',
			title: '车源信息',
			keywords: '',
			chunks: ['chunk-vendors', 'chunk-common', 'sourceOfVehicleSource']
		},
		// 新闻公告
		toNewsList: {
			entry: 'src/mains/toNewsList.js',
			template: 'public/index.ejs',
			filename: 'toNewsList.html',
			pagename: 'toNewsList',
			version: VERSION_STRING,
			// seo-配合搜索引擎优化 vue-不考虑seo
			pagetype: 'seo',
			title: '新闻公告',
			keywords: '',
			chunks: ['chunk-vendors', 'chunk-common', 'toNewsList']
		},
		// 新闻公告
		toNewsDetail: {
			entry: 'src/mains/toNewsDetail.js',
			template: 'public/index.ejs',
			filename: 'toNewsDetail.html',
			pagename: 'toNewsDetail',
			version: VERSION_STRING,
			// seo-配合搜索引擎优化 vue-不考虑seo
			pagetype: 'seo',
			title: '公告详情',
			keywords: '',
			chunks: ['chunk-vendors', 'chunk-common', 'toNewsDetail']
		},
		// 关于我们
		aboutOur: {
			entry: 'src/mains/aboutOur.js',
			template: 'public/index.ejs',
			filename: 'aboutOur.html',
			pagename: 'aboutOur',
			version: VERSION_STRING,
			// seo-配合搜索引擎优化 vue-不考虑seo
			pagetype: 'seo',
			title: '关于我们',
			keywords: '',
			chunks: ['chunk-vendors', 'chunk-common', 'aboutOur']
		},
		// 联系我们
		contactUs: {
			entry: 'src/mains/contactUs.js',
			template: 'public/index.ejs',
			filename: 'contactUs.html',
			pagename: 'contactUs',
			version: VERSION_STRING,
			// seo-配合搜索引擎优化 vue-不考虑seo
			pagetype: 'seo',
			title: '联系我们',
			keywords: '',
			chunks: ['chunk-vendors', 'chunk-common', 'contactUs']
		},
		// 新手入门
		help: {
			entry: 'src/mains/help.js',
			template: 'public/index.ejs',
			filename: 'help.html',
			pagename: 'help',
			version: VERSION_STRING,
			// seo-配合搜索引擎优化 vue-不考虑seo
			pagetype: 'seo',
			title: '新手入门',
			keywords: '',
			chunks: ['chunk-vendors', 'chunk-common', 'help']
		},
		// 疑难解答
		question: {
			entry: 'src/mains/question.js',
			template: 'public/index.ejs',
			filename: 'question.html',
			pagename: 'question',
			version: VERSION_STRING,
			// seo-配合搜索引擎优化 vue-不考虑seo
			pagetype: 'seo',
			title: '疑难解答',
			keywords: '',
			chunks: ['chunk-vendors', 'chunk-common', 'question']
		},
		// 手机智运
		toClientDownload: {
			entry: 'src/mains/toClientDownload.js',
			template: 'public/index.ejs',
			filename: 'toClientDownload.html',
			pagename: 'toClientDownload',
			version: VERSION_STRING,
			// seo-配合搜索引擎优化 vue-不考虑seo
			pagetype: 'seo',
			title: '手机智运',
			keywords: '',
			chunks: ['chunk-vendors', 'chunk-common', 'toClientDownload']
		},
		// 汽运下载页 -跳转app
		download: {
			entry: 'src/mains/download.js',
			template: 'public/h5_download.ejs',
			filename: 'download.html',
			pagename: 'download',
			version: VERSION_STRING,
			// seo-配合搜索引擎优化 vue-不考虑seo
			pagetype: 'seo',
			title: '汽运app下载',
			keywords: '',
			chunks: ['chunk-vendors', 'chunk-common', 'download']
		},
		// 手机智运
		app: {
			entry: 'src/mains/app.js',
			template: 'public/h5_app.ejs',
			filename: 'app.html',
			pagename: '汽运app下载导航',
			version: VERSION_STRING,
			// seo-配合搜索引擎优化 vue-不考虑seo
			pagetype: 'seo',
			title: '手机智运',
			keywords: '',
			chunks: ['chunk-vendors', 'chunk-common', 'app']
		},
		// 手机智运
		download_ship: {
			entry: 'src/mains/app.js',
			template: 'public/h5_download_ship.ejs',
			filename: 'download_ship.html',
			pagename: '船运app下载导航',
			version: VERSION_STRING,
			// seo-配合搜索引擎优化 vue-不考虑seo
			pagetype: 'seo',
			title: '手机智运',
			keywords: '',
			chunks: ['chunk-vendors', 'chunk-common', 'download_ship']
		},
		// 404
		notfind: {
			entry: 'src/mains/404.js',
			template: 'public/index.ejs',
			filename: '404.html',
			pagename: 'notfind',
			version: VERSION_STRING,
			// seo-配合搜索引擎优化 vue-不考虑seo
			pagetype: 'seo',
			title: '404',
			keywords: '',
			chunks: ['chunk-vendors', 'chunk-common', 'notfind']
		}
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@': resolve('src')
			}
		},
		externals: {
			vue: 'Vue',
			'vue-router': 'VueRouter',
			vuex: 'Vuex',
			'element-ui': 'ELEMENT',
			axios: 'axios'
		}
	},
	chainWebpack(config) {
		console.log(process.env.NODE_ENV)
		// when there are many pages, it will cause too many meaningless requests
		config.plugins.delete('prefetch')

		// set svg-sprite-loader
		config.module
			.rule('svg')
			.exclude.add(resolve('src/icons'))
			.end()
		config.module
			.rule('icons')
			.test(/\.svg$/)
			.include.add(resolve('src/icons'))
			.end()
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: 'icon-[name]'
			})
			.end()
		// ejs语法不全 添加ejs-compiled-loader补充include方法支持
		// ejs-compiled-loader bug解决 必须传递query且以?开头 https://github.com/bazilio91/ejs-compiled-loader/issues/46
		config.module
			.rule('ejs')
			.test(/\.ejs$/)
			.use('ejs-compiled-loader')
			.loader('ejs-compiled-loader')
			.tap(args => {
				return {
					query: '?a=1'
				}
			})
			.end()

	},
}
