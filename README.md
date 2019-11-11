# React Download Link

A download link component with React

## Properties

|Name|Description|Type|
|:---|:----------|:---|
|filename|Name of this file|String|
|label|Label of this file|String / Number / Object|
|type|Type and Format of this file|String|
|style|Styleguide for this file|Object|
|exportFile|Method for this file|Function|

## Example

```HTML
<DownloadLink
	label="Download"
	file="test.pdf"
	type="text/pdf;charset=utf8;"
	exportFile={() => "My data file"}
></DownloadLink>
```

```HTML
<DownloadLink
	label="Download"
	file="test.pdf"
	type="text/pdf;charset=utf8;"
	exportFile={() => Promise.resolve("My data file")}
></DownloadLink>
```