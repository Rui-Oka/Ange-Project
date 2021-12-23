//path モジュールの読み込み
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

module.exports = {
	mode: 'development',
	//エントリポイント（デフォルトと同じなので省略可）
	entry: {
		'index': path.resolve(__dirname, "./src/js/index.js"),
        'index.css': path.resolve(__dirname, './src/scss/style.scss')
	},
	//出力先（デフォルトと同じなので省略可）
	output: { 
		path: path.resolve(__dirname, './dist/'), // 出力先フォルダを絶対パスで指定
        filename: 'js/[name].js' // [name]にはentry:で指定したキーが入る
	},
	module: {
	  rules: [
		{
		  // 対象となるファイルの拡張子(scss)
		  test: /\.s[ac]ss$/i,
		  // Sassファイルの読み込みとコンパイル
		  use: [
			// CSSファイルを抽出するように MiniCssExtractPlugin のローダーを指定
			{
			  loader: MiniCssExtractPlugin.loader,
			},
			// CSSをバンドルするためのローダー
			{
			  loader: "css-loader",
			  options: {
				//URL の解決を無効に
				url: false,
				// ソースマップを有効に
				sourceMap: true,
			  },
			},
			// Sass を CSS へ変換するローダー
			{
			  loader: "sass-loader",
			  options: {
				// dart-sass を優先
				implementation: require('sass'),
				sassOptions: {
				  // fibers を使わない場合は以下で false を指定
				//   fiber: require('fibers'),
				},
				// ソースマップを有効に
				sourceMap: true,
			  },
			},
		  ],
		},
	  ],
	},
	//プラグインの設定
	plugins: [
	  new MiniCssExtractPlugin({
		// 抽出する CSS のファイル名
		filename:'css/style.css'
	  }),
	  new FixStyleOnlyEntriesPlugin(),
	],
	//source-map タイプのソースマップを出力
	devtool: "source-map",
	// node_modules を監視（watch）対象から除外
	watchOptions: {
	  ignored: /node_modules/  //正規表現で指定
	},
  };