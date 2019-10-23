class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :commenter, :perfume_id
  belongs_to :perfume
end
