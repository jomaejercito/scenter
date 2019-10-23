class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :commenter, :perfume_id
end
