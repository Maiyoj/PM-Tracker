class TicketSerializer < ActiveModel::Serializer
  attributes :id,  :description, :enviroment, :priority, :comment, :category, :status
  belongs_to :project
  belongs_to :user
end
