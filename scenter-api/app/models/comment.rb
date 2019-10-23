class Comment < ApplicationRecord
  belongs_to :perfume
  validates :comment, presence: true
  validates :commenter, presence: true
end
