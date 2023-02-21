import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import Avatar from './Avatar';
import SocialIcons from './SocialIcons';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const [name, setName] = useState(attributes.name || '');
	const [avatarUrl, setAvatarUrl] = useState(attributes.avatarUrl || '');
	const [bio, setBio] = useState(attributes.bio || '');
	const [socialMedia, setSocialMedia] = useState(
		attributes.socialMedia || []
	);

	const onNameChange = (event) => {
		setName(event.target.value);
		setAttributes({ name: event.target.value });
	};

	const onAvatarChange = (imageUrl) => {
		setAvatarUrl(imageUrl);
		setAttributes({ avatarUrl: imageUrl });
	};

	const onBioChange = (event) => {
		setBio(event.target.value);
		setAttributes({ bio: event.target.value });
	};

	const onSocialMediaChange = (newSocialMedia) => {
		setSocialMedia(newSocialMedia);
		setAttributes({ socialMedia: newSocialMedia });
	};

	return (
		<div {...useBlockProps()}>
			<Avatar avatarUrl={avatarUrl} onAvatarChange={onAvatarChange} />
			<input
				type="text"
				className="author-name"
				placeholder={__('Enter author name…', 'my-plugin')}
				value={name}
				onChange={onNameChange}
			/>
			<textarea
				className="author-bio"
				placeholder={__('Enter author bio…', 'my-plugin')}
				value={bio}
				onChange={onBioChange}
			></textarea>
			<SocialIcons
				socialMedia={socialMedia}
				onSocialMediaChange={onSocialMediaChange}
			/>
		</div>
	);
}
