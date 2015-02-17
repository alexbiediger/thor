class Environment < ActiveRecord::Base
	validates :name, presence: true, :uniqueness => true
	validates :url, format: { with: URI.regexp }, if: Proc.new { |a| a.url.present? }
	validates :color, format: { with: /\A#([0-9a-fA-F]{3}){1,2}\z/ }, if: Proc.new { |a| a.color.present? }
end