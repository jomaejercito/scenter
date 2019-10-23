class PerfumeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :likes
  has_many :comments
end
