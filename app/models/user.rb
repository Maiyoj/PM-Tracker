class User < ApplicationRecord
    has_secure_password
    validates :name, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Invalid email' }
    has_many :tickets
    has_many :projects, through: :tickets
end
