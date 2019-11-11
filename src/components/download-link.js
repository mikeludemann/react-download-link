import React, { Component } from "react";
import PropTypes from "prop-types";

class DownloadLink extends Component {

	handleClick(event) {

		function downloadFile(text, fileName, format) {

			const blob = new Blob([text], {
				type: format
			});

			const element = document.createElement("a");
			document.body.appendChild(element);
			element.setAttribute("href", window.URL.createObjectURL(blob));
			element.setAttribute("download", fileName);
			element.style.display = "";

			element.click();

			document.body.removeChild(element);
      event.stopPropagation();
      
		}

		const fileType = event.target.innerText;
		const text = this.props.exportFile(fileType);

		if (text instanceof Promise) {

      text.then(result => downloadFile(result, this.props.filename, this.props.type));
      
		} else {

      downloadFile(text, this.props.filename, this.props.type);
      
		}
	}

	render() {
		return React.createElement(
			this.props.tagName || "a",
			{
				style: this.props.style,
				className: this.props.className,
				href: "javascript:void(0)",
				onClick: this.handleClick.bind(this)
			},
			this.props.label
		);
	}
}

DownloadLink.defaultProps = {
	filename: "file.txt",
	label: "Save",
	type: "text/csv;charset=utf8;",
	style: {
		margin: "5px 5px 0px 0px",
		textDecoration: "underline",
		color: "blue",
		cursor: "pointer"
	},
	exportFile: () => {}
};

DownloadLink.propTypes = {
	filename: PropTypes.string,
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object
	]),
	type: PropTypes.string,
	style: PropTypes.object,
	exportFile: PropTypes.func
};

export default DownloadLink;
