class Comment < ApplicationRecord
  belongs_to :perfume
  validates :remark, presence: true
  validates :commenter, presence: true
end
