class Project < ActiveRecord::Base
	validates :name, presence: true, :uniqueness => true

	validates :logo,
		attachment_content_type: { content_type: /\Aimage\/.*\Z/ },
		attachment_size: { less_than: 100.kilobytes }

	Paperclip.interpolates :slug do |attachment, style|
		attachment.instance.slug
	end

	has_attached_file :logo, styles: {
			icon: '16x16>',
			normal: '50x50>'
		},
		url: "/assets/images/projects/logo-:slug.:extension"

	before_save :slugify

	protected
		def slugify
			self.slug = self.name.parameterize
		end
end
