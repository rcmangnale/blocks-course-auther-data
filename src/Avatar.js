import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

const Avatar = ({ avatarUrl, onAvatarChange }) => {
	const onSelectAvatar = (media) => {
		onAvatarChange(media.url);
	};

	return (
		<div className="author-avatar">
			{!avatarUrl ? (
				<div className="author-avatar-placeholder">
					{__('Upload Avatar', 'my-plugin')}
				</div>
			) : (
				<img src={avatarUrl} alt={__('Author Avatar', 'my-plugin')} />
			)}
			<MediaUploadCheck>
				<MediaUpload
					onSelect={onSelectAvatar}
					allowedTypes={['image']}
					value={avatarUrl}
					render={({ open }) => (
						<Button isSecondary onClick={open}>
							{!avatarUrl
								? __('Upload Avatar', 'my-plugin')
								: __('Change Avatar', 'my-plugin')}
						</Button>
					)}
				/>
			</MediaUploadCheck>
		</div>
	);
};

export default Avatar;
