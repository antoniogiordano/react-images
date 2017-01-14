import React, { PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import defaults from '../theme';
import { deepMerge } from '../utils';

function Footer ({
	caption,
	...props,
}, {
	theme,
}) {
	if (!caption) return null;

	const classes = StyleSheet.create(deepMerge(defaultStyles, theme));

	return (
		<div className={css(classes.footer)} {...props}>
			{caption ? (
				<figcaption className={css(classes.footerCaption)}>
					{caption}
				</figcaption>
			) : <span />}
		</div>
	);
};

Footer.propTypes = {
	caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	countCurrent: PropTypes.number,
	countSeparator: PropTypes.string,
	countTotal: PropTypes.number,
	showCount: PropTypes.bool,
};
Footer.contextTypes = {
	theme: PropTypes.object.isRequired,
};

const defaultStyles = {
	footer: {
		boxSizing: 'border-box',
		color: defaults.footer.color,
		cursor: 'auto',
		display: 'flex',
		justifyContent: 'space-between',
		left: 0,
		lineHeight: 1.3,
		paddingBottom: defaults.footer.gutter.vertical,
		paddingLeft: defaults.footer.gutter.horizontal,
		paddingRight: defaults.footer.gutter.horizontal,
		paddingTop: defaults.footer.gutter.vertical,
		position: 'absolute',
		bottom: '0',
		width: '100%'
	},
	footerCaption: {
		flex: '1 1 0',
	},
};

module.exports = Footer;
