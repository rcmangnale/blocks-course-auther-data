import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';

const SocialIcons = ({ socialMedia, onSocialMediaChange }) => {
	const [newLink, setNewLink] = useState('');
	const [newIcon, setNewIcon] = useState('');

	const addLink = () => {
		if (!newLink || !newIcon) {
			return;
		}
		const newSocialMedia = [
			...socialMedia,
			{ link: newLink, icon: newIcon },
		];
		onSocialMediaChange(newSocialMedia);
		setNewLink('');
		setNewIcon('');
	};

	const removeLink = (index) => {
		const newSocialMedia = [...socialMedia];
		newSocialMedia.splice(index, 1);
		onSocialMediaChange(newSocialMedia);
	};

	return (
		<div className="author-social-media">
			{socialMedia.map((link, index) => (
				<div key={index} className="author-social-media-link">
					<a
						href={link.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={link.icon}
							alt={__('Social Media Icon', 'my-plugin')}
						/>
					</a>
					<Button isLink onClick={() => removeLink(index)}>
						{__('Remove', 'my-plugin')}
					</Button>
				</div>
			))}
			<div className="author-social-media-add">
				<input
					type="text"
					className="author-social-media-link"
					placeholder={__('Enter social media link…', 'my-plugin')}
					value={newLink}
					onChange={(event) => setNewLink(event.target.value)}
				/>
				<input
					type="text"
					className="author-social-media-icon"
					placeholder={__(
						'Enter social media icon URL…',
						'my-plugin'
					)}
					value={newIcon}
					onChange={(event) => setNewIcon(event.target.value)}
				/>
				<Button isPrimary onClick={addLink}>
					{__('Add', 'my-plugin')}
				</Button>
			</div>
		</div>
	);
};

export default SocialIcons;
